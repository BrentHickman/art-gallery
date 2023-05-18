using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ImageGalleryApi.Migrations
{
    public partial class TestImg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://www.dropbox.com/s/v92tzxbk8m1tvb6/art-gallery-diagram.png?dl=0");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
        }
    }
}
