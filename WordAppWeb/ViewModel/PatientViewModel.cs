using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WordAppWeb.ViewModel
{
    public class PatientViewModel
    {
        public string Name { get; set; }

        public int Id { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Gender { get; set; }

        public int Weight { get; set; }

        public int Height { get; set; }

        public string BloodType { get; set; }

        public string BloodPressure { get; set; }

        public int HeartRate { get; set; }

        public int Cholesterol { get; set; }

        public int BloodGlucose { get; set; }

    }
}