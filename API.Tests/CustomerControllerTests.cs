using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Controllers;

namespace API.Tests
{
    public class CustomerControllerTests
    {
        [Fact]
        public void GetJsonTrue()
        {
            // Arrange
            CustomerController controller = new CustomerController();

            // Act
            string result = controller.Get("Anya");

            // Assert
            Assert.Equal("Hello world!", result);
        }
    }
}
