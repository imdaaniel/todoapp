USE [master]
GO
/****** Object:  Database [desafio]    Script Date: 21/11/2019 03:21:28 ******/
CREATE DATABASE [desafio]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'desafio', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\desafio.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'desafio_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\desafio_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [desafio] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [desafio].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [desafio] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [desafio] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [desafio] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [desafio] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [desafio] SET ARITHABORT OFF 
GO
ALTER DATABASE [desafio] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [desafio] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [desafio] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [desafio] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [desafio] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [desafio] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [desafio] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [desafio] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [desafio] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [desafio] SET  ENABLE_BROKER 
GO
ALTER DATABASE [desafio] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [desafio] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [desafio] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [desafio] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [desafio] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [desafio] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [desafio] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [desafio] SET RECOVERY FULL 
GO
ALTER DATABASE [desafio] SET  MULTI_USER 
GO
ALTER DATABASE [desafio] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [desafio] SET DB_CHAINING OFF 
GO
ALTER DATABASE [desafio] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [desafio] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [desafio] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'desafio', N'ON'
GO
ALTER DATABASE [desafio] SET QUERY_STORE = OFF
GO
USE [desafio]
GO
/****** Object:  Table [dbo].[categoria]    Script Date: 21/11/2019 03:21:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categoria](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](50) NOT NULL,
 CONSTRAINT [PK_categoria] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[todo]    Script Date: 21/11/2019 03:21:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[todo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](50) NOT NULL,
	[categoria] [int] NOT NULL,
 CONSTRAINT [PK_todo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[categoria] ON 

INSERT [dbo].[categoria] ([id], [titulo]) VALUES (13, N'Trabalho')
INSERT [dbo].[categoria] ([id], [titulo]) VALUES (14, N'Pessoal')
INSERT [dbo].[categoria] ([id], [titulo]) VALUES (15, N'Hobbie')
SET IDENTITY_INSERT [dbo].[categoria] OFF
SET IDENTITY_INSERT [dbo].[todo] ON 

INSERT [dbo].[todo] ([id], [titulo], [categoria]) VALUES (82, N'Apresentar o novo projeto amanhã às 10h00', 13)
INSERT [dbo].[todo] ([id], [titulo], [categoria]) VALUES (83, N'Transferir R$200,00 para o Marcos', 14)
INSERT [dbo].[todo] ([id], [titulo], [categoria]) VALUES (84, N'Aprender uma nova música no piano', 15)
INSERT [dbo].[todo] ([id], [titulo], [categoria]) VALUES (85, N'Comprar uma camisa', 14)
INSERT [dbo].[todo] ([id], [titulo], [categoria]) VALUES (87, N'Pagar o Marcos', 13)
SET IDENTITY_INSERT [dbo].[todo] OFF
ALTER TABLE [dbo].[todo]  WITH CHECK ADD  CONSTRAINT [FK_todo_categoria] FOREIGN KEY([categoria])
REFERENCES [dbo].[categoria] ([id])
GO
ALTER TABLE [dbo].[todo] CHECK CONSTRAINT [FK_todo_categoria]
GO
USE [master]
GO
ALTER DATABASE [desafio] SET  READ_WRITE 
GO
