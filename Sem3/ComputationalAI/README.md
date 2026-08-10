# Exam Seating Arrangement with runtime input

# Dictionary mapping hall ticket numbers to seat details
seating_info = {
    "HT001": {"seat": "Seat1", "hall": "Hall A", "invigilator": "Mr. Rao", "subject": "Math"},
    "HT002": {"seat": "Seat2", "hall": "Hall A", "invigilator": "Mr. Rao", "subject": "Math"},
    "HT003": {"seat": "Seat3", "hall": "Hall B", "invigilator": "Ms. Priya", "subject": "Physics"},
    "HT004": {"seat": "Seat4", "hall": "Hall B", "invigilator": "Ms. Priya", "subject": "Physics"},
    "HT005": {"seat": "Seat5", "hall": "Hall C", "invigilator": "Mr. Kumar", "subject": "Chemistry"}
}

# Take hall ticket number as input at runtime
hall_ticket = input("Enter your Hall Ticket Number: ")

# Check and display details
if hall_ticket in seating_info:
    details = seating_info[hall_ticket]
    print("\nExam Seating Details:")
    print(f"Hall Ticket: {hall_ticket}")
    print(f"Hall: {details['hall']}")
    print(f"Seat: {details['seat']}")
    print(f"Invigilator: {details['invigilator']}")
    print(f"Subject: {details['subject']}")
else:
    print("Invalid Hall Ticket Number. Please check again.")
