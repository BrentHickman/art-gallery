using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ImageGalleryApi.Models;

namespace ImageGalleryApi.Controllers.V1
{
  [ApiVersion("1.0")]
  // [ApiVersion("2.0")]
  [Route("v{version:apiVersion}/[controller]")]
  [ApiController]
  public class ImagesController : ControllerBase
  {
    private readonly ImageGalleryApiContext _db;

    public ImagesController(ImageGalleryApiContext db)
    {
      _db = db;
    }

    // GET: api/Images
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Image>>> Get(string species)
    {
      IQueryable<Image> query = _db.Images.AsQueryable();
      if (species != null)
      {
        query = query.Where(entry => entry.Species == species);
      }
      return await query.ToListAsync();
    }

    // POST api/images
    [HttpPost]
    public async Task<ActionResult<Image>> Post(Image image)
    {
      _db.Images.Add(image);
      await _db.SaveChangesAsync();
      return CreatedAtAction(nameof(GetImage), new { id = image.ImageId }, image);
    }

    // GET: api/Images/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Image>> GetImage(int id)
    {
      Image image = await _db.Images.FindAsync(id);

      if (image == null)
      {
        return NotFound();
      }

      return image;
    }
    // PUT: api/Images/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Image image)
    {
      if (id != image.ImageId)
      {
        return BadRequest();
      }

      _db.Images.Update(image);

      try
      {
        await _db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ImageExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    private bool ImageExists(int id)
    {
      return _db.Images.Any(e => e.ImageId == id);
    }
    // DELETE: api/Images/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteImage(int id)
    {
      Image image = await _db.Images.FindAsync(id);
      if (image == null)
      {
        return NotFound();
      }

      _db.Images.Remove(image);
      await _db.SaveChangesAsync();

      return NoContent();
    }
  }
}