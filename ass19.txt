#include <iostream>
#include <iomanip>


using namespace std;

double gross_pay_calculator(){
    double hours;
    double payrate; 

    cout << "Enter total hours worked:  " <<endl;
    cin >> hours;
    cout << "Enter pay rate: " <<endl;
    cin >> payrate;

    while (hours < 0 || hours > 40){
        cout << "Hours must be between 0 and 40" <<endl;
        cin >> hours;
    }

     while (payrate < 7.50 || payrate > 18.25){
        cout << "Pay rate must be between $7.50 and $18.25" <<endl;
        cin >> payrate;
    }

    double gross_pay = hours * payrate;
    return gross_pay;
}

int main()
{
    double gross_pay = gross_pay_calculator();
    cout << fixed << setprecision(2); 
    cout << "Gross pay: $" << gross_pay << endl;

    return 0;
}

