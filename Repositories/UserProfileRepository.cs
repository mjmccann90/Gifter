﻿using Gifter.Data;
using Gifter.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Repositories
{
    public class UserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile.FirstOrDefault(uP=> uP.Id == id);
        }

        public void Add(UserProfile userPro)
        {
            _context.Add(userPro);
            _context.SaveChanges();
        }

        public void Update(UserProfile comment)
        {
            _context.Entry(comment).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var comment = GetById(id);
            _context.UserProfile.Remove(comment);
            _context.SaveChanges();
        }
    }
}
