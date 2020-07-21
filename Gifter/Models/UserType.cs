﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Models
{
    public class UserType
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        // These read-only static properties correspond to the ID values in the database
        //  for the "Admin" and "User" user types.
        public static int ADMIN_TYPE_ID => 1;
        public static int USER_TYPE_ID => 2;
    }
}