using Gifter.Models;
using Microsoft.EntityFrameworkCore;

namespace Gifter.Data
{
    public class ApplicationDbContext : DbContext
    {
        internal object comment;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<Post> Post { get; set; }
        public DbSet<Comment>Comment { get; internal set; }
        public DbSet<UserType> UserType { get; set; }
    }
}