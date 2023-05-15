using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ImageGalleryApi.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    ImageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Size = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Color1 = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Color2 = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Color3 = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Subject = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Medium = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Date = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Available = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ImageUrl = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.ImageId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "ImageId", "Available", "Color1", "Color2", "Color3", "Date", "Description", "ImageUrl", "Medium", "Size", "Subject", "Title" },
                values: new object[] { 1, true, "Red", "White", "Orange", "1/1/2000", "Test Landscape Painting", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "Acrylic and Mixed media on Canvas", "24in x 36in", "Landscape", "Test1" });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "ImageId", "Available", "Color1", "Color2", "Color3", "Date", "Description", "ImageUrl", "Medium", "Size", "Subject", "Title" },
                values: new object[] { 2, true, "Green", "White", "Blue", "1/1/2000", "Test Portait Painting", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "Acrylic and Mixed media on Canvas", "24in x 24in", "Portait", "Test2" });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "ImageId", "Available", "Color1", "Color2", "Color3", "Date", "Description", "ImageUrl", "Medium", "Size", "Subject", "Title" },
                values: new object[] { 3, true, "Red", "White", "Black", "1/1/2000", "Test Portrait Relief Print", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "Linoleum cut ink print on paper", "8in x 10in", "Portait", "Test3" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Images");
        }
    }
}
