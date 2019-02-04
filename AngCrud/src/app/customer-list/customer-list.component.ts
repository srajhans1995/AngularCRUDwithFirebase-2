import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/app/shared/customer.service";
@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customerArray = [];
  showDeleteMessage: boolean;
  searchText: string = "";
  ngOnInit() {
    this.customerService.getCustomers().subscribe(list => {
      this.customerArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  onDelete($key) {
    if (confirm("Are you sure To Delete This Record ?")) {
      this.customerService.deleteCustomer($key);
      this.showDeleteMessage = true;
      setTimeout(() => (this.showDeleteMessage = false), 3000);
    }
  }

  filterCondition(customer) {
    return (
      customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !=
        -1,
      customer.location.toLowerCase().indexOf(this.searchText.toLowerCase()) !=
        -1,
      customer.email.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1
    );
  }
}