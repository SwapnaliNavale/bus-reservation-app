package com.bus.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity // mandatory class level annotation for hibernate , to specify
//following class represents DB entity
@Table(name = "users") // to specify name of the table
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "password", "tickets","userAddress" })
public class User extends BaseEntity {
	
	@Column(name = "first_name", length = 20) // column name , varchar(20)
	private String firstName;
	
	@Column(name = "last_name", length = 20) // column name , varchar(20)
	private String lastName;
	
	@Column(length = 25, unique = true) // adds unique constraint
	private String email;
	
	 @Column(length = 20, nullable = false) // not null constraint
	private String password;
	 
	private LocalDate dob;
	
	@Column(length = 25, unique = true) // adds unique constraint
	private Long mobileNo;
	
	@Column
	private int age;
	
	@Column(name = "is_active")
	private boolean isActive;
	
	@Enumerated(EnumType.STRING) 
    @Column(length = 25) 
	private Gender gender;
	
	@Enumerated(EnumType.STRING) 
    @Column(length = 30) 
    private UserRole role;

	//User 1--->1 Address , User - one , owning side (will contain FK)
    @OneToOne
    @JoinColumn(name="address_id")
    private Address userAddress;

  //User can book multiple tickets (ticket *<--->1 User)  option bi_directional
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Ticket> tickets = new ArrayList<>();

	public User(String firstName, String lastName, String email, String password, LocalDate dob, Long mobileNo, int age,
			boolean isActive, Gender gender, UserRole role, Address userAddress, List<Ticket> tickets) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.dob = dob;
		this.mobileNo = mobileNo;
		this.age = age;
		this.isActive = isActive;
		this.gender = gender;
		this.role = role;
		this.userAddress = userAddress;
		this.tickets = tickets;
	}
	
    


}
