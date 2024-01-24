// class creation
class BookingTrain 
{
    registration(name) 
    {
        this.name = name;
        alert(`${this.name} : Your Seat is Registered !!`);
        alert(`${this.name} kindly Pay the Payment.`);
    }

    submit()
    {
        alert(`${this.name} : Your Request Submitted Successfully !!`);
    }

    cancel()
    {
        alert(`${this.name} : Your Form is Cancelled, Kindly recheck`);
    }

}

// creation of the class object
let tuntun = new BookingTrain();
let mausi = new BookingTrain();

// class object methods
tuntun.registration("John");
tuntun.submit();
tuntun.cancel();

// class object methods
mausi.registration("raju");
mausi.submit();
mausi.cancel();

