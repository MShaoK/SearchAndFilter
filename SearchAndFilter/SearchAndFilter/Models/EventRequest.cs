﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SearchAndFilter.Models
{
    public class EventRequest
    {
        [JsonProperty("pageIndex")]
        public int PageIndex { get; set; }
        [JsonProperty("pageSize")]
        public int PageSize { get; set; }
        [JsonProperty("categoryId")]
        public int? CategoryId { get; set; }
        [JsonProperty("keyword")]
        public int Keyword { get; set; }

    }
}
