"use strict";
class Student{
constructor(id, name, gpa, courses){
	
	this.id=id
	this.name=name;
	this.gpa=gpa;
	this.courses=courses;

	}
toString() {
    
    return this.id+ "  "+this.name +"  "+ this.gpa+"  "+this.courses;
  }
}

class Course{
constructor(name, time, date, rooms){
	this.name=name;
	this.time=time;
	this.date=date;
	this.rooms=rooms;


       }
toString() {
    
    return this.name +"  "+ this.time+"  "+this.date+"  "+ this.rooms;
  }
}

class Point{
constructor(x,y){
	this.x=x;
	this.y=y;
	
       }
toString() {
    
    return this.x+","+ this.y;
  }
}

class Point3D extends Point {

constructor(x,y,z){
	super(x,y);
	this.z=z;

       }
toString() {
    
    return this.x+","+ this.y+","+this.z;
  }
}


class CW5 extends Menu {
  constructor() {
    super();
   
    this.course1=new Course("English","2hours","10.02.2015","c109");
    this.course2=new Course("Matematik","4hours","02.08.2018","b501");
    this.course3=new Course("Fizik","3hours","11.10.2019","a104");

    this.student1=new Student("Ayse",123,60,"English");
    this.student2=new Student("Derya",562,89 ,"Matematik");
    this.student3=new Student("Özgür",842,45, "Fizik")
   
    this.point1=new Point(5,2);
    this.point2=new Point(4,7);

    this.point3D1= new Point3D(8,2,1);
    this.point3D2= new Point3D(2,0,7);

   
  }

}


