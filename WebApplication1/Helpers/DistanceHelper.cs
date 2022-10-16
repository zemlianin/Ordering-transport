using Microsoft.EntityFrameworkCore.Metadata.Internal;
using WebApplication1.Models;

namespace WebApplication1.Helpers
{
    public class DistanceHelper
    {
        private static double DegreesToRadians(double degrees)
        {
            return degrees * Math.PI / 180;
        }

        public static double DistanceInKm(Location first, Location second)
        {
            var earthRadiusKm = 6371;

            var dLat = DegreesToRadians(second.X - first.X);
            var dLon = DegreesToRadians(second.Y - second.Y);

            first.X = DegreesToRadians(first.X);
            second.X = DegreesToRadians(second.X);

            var a = Math.Sin(dLat / 2) * Math.Sin(dLat / 2) +
                    Math.Sin(dLon / 2) * Math.Sin(dLon / 2) * Math.Cos(first.X) * Math.Cos(second.X);
            var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
            return earthRadiusKm * c;
        }
    }
}
