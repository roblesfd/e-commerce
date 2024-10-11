import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

interface CardMediaProps {
  imageUrl: string;
  altText: string;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`p-4 ${className}`}>
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};

const CardMedia: React.FC<CardMediaProps> = ({
  imageUrl,
  altText,
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`} style={{ height: "180px" }}>
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
        style={{ height: "100%" }}
      />
    </div>
  );
};

const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 h-auto ${className}`}>{children}</div>;
};

const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-4 bg-gray-100 ${className}`}>{children}</div>;
};

export { Card, CardHeader, CardMedia, CardContent, CardFooter };
