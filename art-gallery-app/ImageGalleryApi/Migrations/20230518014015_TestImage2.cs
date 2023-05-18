using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ImageGalleryApi.Migrations
{
    public partial class TestImage2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://i.ibb.co/pwmzc6B/art-gallery-diagram.png");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://www.dropbox.com/s/v92tzxbk8m1tvb6/art-gallery-diagram.png?dl=0");
        }
    }
}
