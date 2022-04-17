using Microsoft.AspNetCore.Mvc;
using StineSeed.Model;
using StineSeed.Services;
namespace StineSeed.Controllers
{
    [ApiController]
    [Route("[controller]")]   
    public class InventoryRequestController : ControllerBase
    {
        private readonly IInventoryRequestService _inventoryRequestService;
        //Injected InventoryRequestService using Dependency Injection 
        public InventoryRequestController(IInventoryRequestService inventoryRequestService)
        {
            _inventoryRequestService = inventoryRequestService;
        }

        [HttpGet]
        public InventoryRequest Get()
        {
            return _inventoryRequestService.GetInventoryRequest();
        }
    }
}
