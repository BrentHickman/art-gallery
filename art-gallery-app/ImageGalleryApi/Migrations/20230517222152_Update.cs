using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ImageGalleryApi.Migrations
{
    public partial class Update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 3,
                columns: new[] { "Color2", "Color3" },
                values: new object[] { "Black", "Blue" });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "ImageId", "Available", "Color1", "Color2", "Color3", "Date", "Description", "ImageUrl", "Medium", "Size", "Subject", "Title" },
                values: new object[] { 4, true, "Orange", "Black", "Blue", "1/1/2000", "Test Landscape Relief Print", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", "Linoleum cut ink print on paper", "12in x 9in", "Landscape", "Test4" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4);

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 3,
                columns: new[] { "Color2", "Color3" },
                values: new object[] { "White", "Black" });
        }
    }
}
