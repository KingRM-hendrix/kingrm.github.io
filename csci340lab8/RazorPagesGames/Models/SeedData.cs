using Microsoft.EntityFrameworkCore;
using RazorPagesGame.Data;
using RazorPagesMovie.Models;

namespace RazorPagesGames.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new RazorPagesMovieContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<RazorPagesMovieContext>>()))
        {
            if (context == null || context.Game == null)
            {
                throw new ArgumentNullException("Null RazorPagesGamesContext");
            }

            // Look for any movies.
            if (context.Game.Any())
            {
                return;   // DB has been seeded
            }

            context.Game.AddRange(
                new Game
                {
                    Title = "The Legend of Zelda: Breath of the Wild",
                    ReleaseDate = DateTime.Parse("2017-3-3"),
                    Genre = "Open World",
                    Price = 59.99M,
                    Rating = "E10+",
                    Developer = "Nintendo"
                },

                new Game
                {
                    Title = "Resident Evil 4",
                    ReleaseDate = DateTime.Parse("2023-3-24"),
                    Genre = "Survival Horror",
                    Price = 39.99M,
                    Rating = "M",
                    Developer = "Capcom"
                },

                new Game
                {
                    Title = "Resident Evil 2",
                    ReleaseDate = DateTime.Parse("1998-1-21"),
                    Genre = "Survival Horror",
                    Price = 9.99M,
                    Rating = "M",
                    Developer = "Capcom"
                },

                new Game
                {
                    Title = "Marvel's Spider-Man",
                    ReleaseDate = DateTime.Parse("2018-9-7"),
                    Genre = "Action-adventure",
                    Price = 19.99M,
                    Rating = "T",
                    Developer = "Insomniac Games"
                }
            );
            context.SaveChanges();
        }
    }
}