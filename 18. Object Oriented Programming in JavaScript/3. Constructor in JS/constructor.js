// class creation
class BookingTrain 
{
    constructor(name, seatNo, trainNo, address)
    {
        this.name = name;
        this.trainNo = trainNo;
        this.seatNo = seatNo;
        this.address = address;
        console.log("Constructor Invoked !!");
    }

    preview()
    {
        alert(`Your Name : ${this.name}, Your Seat Number : ${this.seatNo}, Train Number : ${this.trainNo}, Passenger Address : ${this.address} `);
    }

    registration() 
    {
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
let tuntun = new BookingTrain("John", 1202008, 120, "At. Boisar, 401434 MH, IN");
let mausi = new BookingTrain("Cena", 1202023, 220, "At. Pam, 401605 MP, IN");

// class object methods
tuntun.preview();
tuntun.registration();
tuntun.submit();
tuntun.cancel();

// class object methods
mausi.preview();
mausi.registration();
mausi.submit();
mausi.cancel();
