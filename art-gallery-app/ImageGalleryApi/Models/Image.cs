using System.ComponentModel.DataAnnotations;


namespace ImageGalleryApi.Models
{
  public class Image
  {
    public int ImageId { get; set; }
    [Required]
    public string Title { get; set; }
    [Required]
    public string Description { get; set; }
    [Required]
    public string Size { get; set; }
    [Required]
    public string Color1{ get; set; }
    [Required]
    public string Color2{ get; set; }
    [Required]
    public string Color3{ get; set; }
    [Required]
    public string Subject{ get; set; }
    [Required]
    public string Medium{ get; set; }
    [Required]
    public string Date { get; set; }
    [Required]
    public bool Available { get; set;}
    [Required]
    public string ImageUrl { get; set;}
  }
}