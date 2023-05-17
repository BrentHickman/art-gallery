using Microsoft.EntityFrameworkCore;

namespace ImageGalleryApi.Models
{
  public class ImageGalleryApiContext : DbContext
  {
    public DbSet<Image> Images { get; set; }
    public ImageGalleryApiContext(DbContextOptions<ImageGalleryApiContext> options) : base(options)
    {
    }

        protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Image>()
        .HasData(
          new Image { ImageId = 1, Title = "Test1", Description = "Test Landscape Painting", Size = "24in x 36in", Color1 = "Red", Color2 = "White", Color3 = "Orange", Subject = "Landscape", Medium = "Acrylic and Mixed media on Canvas", Date = "1/1/2000", Available = true, ImageUrl = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
          new Image { ImageId = 2, Title = "Test2", Description = "Test Portait Painting", Size = "24in x 24in", Color1 = "Green", Color2 = "White", Color3 = "Blue", Subject = "Portait", Medium = "Acrylic and Mixed media on Canvas", Date = "1/1/2000", Available = true, ImageUrl = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
          new Image { ImageId = 3, Title = "Test3", Description = "Test Portrait Relief Print", Size = "8in x 10in", Color1 = "Red", Color2 = "Black", Color3 = "Blue", Subject = "Portait", Medium = "Linoleum cut ink print on paper", Date = "1/1/2000", Available = true, ImageUrl = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
          new Image { ImageId = 4, Title = "Test4", Description = "Test Landscape Relief Print", Size = "12in x 9in", Color1 = "Orange", Color2 = "Black", Color3 = "Blue", Subject = "Landscape", Medium = "Linoleum cut ink print on paper", Date = "1/1/2000", Available = true, ImageUrl = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" }
        );
    }
  }
}