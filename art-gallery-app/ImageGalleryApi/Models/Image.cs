using System.ComponentModel.DataAnnotations;


namespace ImageGalleryApi.Models
{
  public class Image
  {
    public int ImageId { get; set; }
    [Required]
    [StringLength(20)]
    public string Species { get; set; }
    [Required]
    [StringLength(20)]
    public string Name { get; set; }
    [Required]
    [Range(0, 100, ErrorMessage = "Years must be between 0 and 100.")]
    public int AgeYears { get; set; }
    [Range(0, 11, ErrorMessage = "Months must be between 0 and 11.")]
    public int AgeMonths { get; set; }
    [Required]
    public string Sex { get; set; }
    [Required]
    [StringLength(30)]
    public string Breed { get; set; }
    [Required]
    public int Weight { get; set; }
    [Required]
    [StringLength(20)]
    public string Coloring { get; set; }
    public string Description { get; set; }
    public string DateAvailable { get; set; }

  }
}