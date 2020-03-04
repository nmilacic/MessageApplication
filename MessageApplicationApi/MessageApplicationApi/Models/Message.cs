using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageApplicationApi.Models
{
    public class Message
    {
        public int MessageId { get; set; }
        public string TextMessage { get; set; }
        public DateTime CurrentDate { get; set; }
        public IList<Comment> ListOfComments { get; set; }
        public Message()
        {
            CurrentDate = DateTime.Now;
        }
        public string UserName { get; set; }
        public bool IsDeleted { get; set; }

    }
}
