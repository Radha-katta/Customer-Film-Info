package com.microservice.document;

import java.util.List;

public class CustomerList {
	private List<CustomerInfo> customerInfoList;
	
	public CustomerList() {
		
	}

	public List<CustomerInfo> getCustomerInfoList() {
		return customerInfoList;
	}

	public void setCustomerInfoList(List<CustomerInfo> customerInfoList) {
		this.customerInfoList = customerInfoList;
	}

}
