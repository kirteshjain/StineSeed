using Newtonsoft.Json;
using StineSeed.Model;
using System.Net;

namespace StineSeed.Services
{
    public class InventoryRequestService : IInventoryRequestService
    {

        public InventoryRequest GetInventoryRequest()
        {

            var webClient = new WebClient();
            var json = webClient.DownloadString(@"https://mocki.io/v1/0077e191-c3ae-47f6-bbbd-3b3b905e4a60");

            var requestInventory = JsonConvert.DeserializeObject<InventoryRequest>(json);
           
            return requestInventory;
        }
    }
}
