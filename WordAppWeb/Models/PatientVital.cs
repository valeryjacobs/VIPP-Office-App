//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WordAppWeb.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class PatientVital
    {
        public int VitalsID { get; set; }
        public Nullable<int> PatientID { get; set; }
        public string Height { get; set; }
        public string Weight { get; set; }
        public string BloodGlucose { get; set; }
        public string Cholesterol { get; set; }
        public Nullable<short> Pulse { get; set; }
        public Nullable<short> Temperature { get; set; }
        public Nullable<short> BP_Diastolic { get; set; }
        public Nullable<short> BP_Systolic { get; set; }
        public Nullable<short> LungCapacity { get; set; }
        public string BloodType { get; set; }
    
        public virtual Patient Patient { get; set; }
    }
}
