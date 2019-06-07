using System.Collections.Generic;

namespace GradeBook
{
    public class Book
    {
        private List<double> grades;
        public Book()
        {
            grades = new List<double>();
        }
        public void AddGrade(double grade)
        {
            grades.Add(grade);
        }

        public double GetAverage() { 
            double total = 0;
            foreach (var grade in grades) { 
                total += grade;
            }
            return total/grades.Count;
        }
    }
}