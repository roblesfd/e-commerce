import User from "../models/User";
import bcrypt from "bcrypt";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface JwtPayload {
  UserInfo: {
    username: string;
    role: string[];
    id: string;
  };
  username?: string;
}

// @desc Login
// @route POST /auth
// @access Public
const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Todos los campos son obligatorios" });
    return;
  }

  const foundUser = await User.findOne({ username }).exec();

  if (!foundUser) {
    res.status(401).json({ message: "Usuario no encontrado" });
    return;
  }

  if (!foundUser.active) {
    res.status(401).json({ message: "Tu cuenta no esta activada" });
    return;
  }

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) {
    res.status(401).json({ message: "Contraseña incorrecta" });
    return;
  }

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: foundUser.username,
        role: foundUser.role,
        id: foundUser._id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET as Secret,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { username: foundUser.username },
    process.env.REFRESH_TOKEN_SECRET as Secret,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken });
};

// @desc Refresh
// @route GET /auth/refresh
// @access Public
const refresh = (req: Request, res: Response): void => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    res.status(401).json({ message: "No estás autorizado" });
    return;
  }

  const refreshToken = cookies.jwt;
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  if (!refreshTokenSecret || !accessTokenSecret) {
    res.status(500).json({ message: "Error en la configuración del servidor" });
    return;
  }

  jwt.verify(refreshToken, refreshTokenSecret, (err: any, decoded: any) => {
    if (err) {
      res.status(403).json({ message: "Prohibido" });
      return;
    }

    if (decoded && typeof decoded === "object" && "username" in decoded) {
      User.findOne({ username: (decoded as JwtPayload).username })
        .exec()
        .then((foundUser) => {
          if (!foundUser) {
            res.status(401).json({ message: "No estás autorizado" });
            return;
          }

          const accessToken = jwt.sign(
            {
              UserInfo: {
                username: foundUser.username,
                role: foundUser.role,
                id: foundUser._id,
              },
            },
            accessTokenSecret,
            { expiresIn: "15m" }
          );
          console.log("Ok");
          res.status(200).json({ accessToken });
        })
        .catch((error) => {
          res.status(500).json({ message: "Error en el servidor" });
        });
    } else {
      res.status(401).json({ message: "Datos del token inválidos" });
    }
  });
};

// const refresh = (req: Request, res: Response): void => {
//     const cookies = req.cookies;

//     if (!cookies?.jwt) {
//       res.status(401).json({ message: "No estás autorizado" });
//       return;
//     }

//     const refreshToken = cookies.jwt;
//     const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
//     const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

//     // Verificar que las variables de entorno están definidas
//     if (!refreshTokenSecret || !accessTokenSecret) {
//       res.status(500).json({ message: "Error en la configuración del servidor" });
//       return;
//     }

//     jwt.verify(
//       refreshToken,
//       refreshTokenSecret,
//       async (err: any, decoded: JwtPayload | undefined) => {
//         if (err) {
//           res.status(403).json({ message: "Prohibido" });
//           return;
//         }

//         if (decoded) {
//           try {
//             const foundUser = await User.findOne({ username: decoded.username }).exec();

//             if (!foundUser) {
//               res.status(401).json({ message: "No estás autorizado" });
//               return;
//             }

//             const accessToken = jwt.sign(
//               {
//                 UserInfo: {
//                   username: foundUser.username,
//                   role: foundUser.role,
//                   id: foundUser._id,
//                 },
//               },
//               accessTokenSecret, // Este valor ya está garantizado
//               { expiresIn: "15m" }
//             );

//             res.json({ accessToken });
//           } catch (error) {
//             res.status(500).json({ message: "Error en el servidor" });
//           }
//         }
//       }
//     );
//   };

// const refresh = (req: Request, res: Response): void => {
//   const cookies = req.cookies;

//   if (!cookies?.jwt) {
//     res.status(401).json({ message: "No estas autorizado" });
//     return;
//   }

//   const refreshToken = cookies.jwt;

//   jwt.verify(
//     refreshToken,
//     process.env.REFRESH_TOKEN_SECRET,
//     async (err: any, decoded: JwtPayload | undefined) => {
//       if (err) {
//         res.status(403).json({ message: "Prohibido" });
//         return;
//       }
//       if (decoded) {
//         const foundUser = await User.findOne({
//           username: decoded.username,
//         }).exec();
//         if (!foundUser) {
//           res.status(401).json({ message: "No estas autorizado" });
//           return;
//         }

//         const accessToken = jwt.sign(
//           {
//             UserInfo: {
//               username: foundUser.username,
//               role: foundUser.role,
//               id: foundUser._id,
//             },
//           },
//           process.env.ACCESS_TOKEN_SECRET as Secret,
//           { expiresIn: "15m" }
//         );

//         res.json({ accessToken });
//       }
//     }
//   );
// };

// @desc Logout
// @route POST /auth/logout
// @access Public
const logout = (req: Request, res: Response): void => {
  // const cookies = req.cookies;
  // console.log(req);
  // if (!cookies?.jwt) {
  //   res.sendStatus(204);
  //   return;
  // }
  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  res.status(201).json({ message: "Cookie limpiada" });
};

// @desc Confirm
// @route POST /auth/confirmar/:token
// @access Public
const confirm = async (req: Request, res: Response): Promise<any> => {
  const { token } = req.params;

  const user = await User.findOne({ token });

  if (!user) {
    res.status(401).json({ message: "Error al confirmar la cuenta" });
    return;
  }

  user.token = "";
  user.active = true;
  await user.save();

  return res.status(201).json({ message: "Tu cuenta ha sido confirmada" });
};

export default {
  login,
  refresh,
  logout,
  confirm,
};
