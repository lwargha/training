using System;
using System.Collections.Generic;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            var book = new Book();
            book.AddGrade(52.2);
            book.AddGrade(52.2);
            book.AddGrade(52.2);
            book.AddGrade(52.2);
            var average = book.GetAverage();
            System.Console.WriteLine(average);
        }
    }
}
