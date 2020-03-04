using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageApplicationApi.Models
{
    public class Comment
    {
        public int CommentId { get; set; }

        public string TextComment { get; set; }
        public int? MessageId { get; set; }
        public DateTime CurrentDateTime { get; set; }
        public Comment()
        {
            CurrentDateTime = DateTime.Now;
        }
        public string UserName { get; set; }
    }
}
