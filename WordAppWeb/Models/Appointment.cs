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
    
    public partial class Appointment
    {
        public int AppointmentID { get; set; }
        public int PatientID { get; set; }
        public System.DateTime AppointmentDate { get; set; }
        public System.TimeSpan AppoinmentTime { get; set; }
        public int PhysicianID { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
    
        public virtual Patient Patient { get; set; }
    }
}