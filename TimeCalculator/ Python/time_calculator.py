def add_time(start, duration, day=""):
    # List of the weekdays
    days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    # Get integers from the string inputs
    time_part, period = start.split()
    hour, minute = map(int, time_part.split(":"))
    duration_hour, duration_minute = map(int,duration.split(":"))
    
    # Caclulate time and restart hours when they pass 12
    end_hour = (hour + duration_hour) % 12
    end_minute = minute + duration_minute
    additional_hour = 0
    
    # Add an hour if mins are 60+ and restart minutes
    if end_minute >= 60:
        additional_hour += 1
        end_minute = end_minute % 60

    # Method for calculating days - when hours reach 12 they should not show 0 but 12
    total_hour = hour + duration_hour + additional_hour
    end_hour = total_hour % 12
    if end_hour == 0:
        end_hour = 12
    days_passed = total_hour // 24

    # Change AM to PM and vice versa. Attention --> when PM to AM it should add a day to the calculator
    period_changes = (total_hour // 12) % 2
    if period == "AM" and period_changes == 1:
        period = "PM"
    elif period == "PM" and period_changes == 1:
        period = 'AM'
        days_passed +=1
    
    # If a day is given as input then calculate days by using the list on the top of our function
    if day:
        day_index = days_of_week.index(day.capitalize())
        new_day_index = (day_index + days_passed) % 7
        new_day = days_of_week[new_day_index]
        day_str = f", {new_day}"
    else:
        day_str = ""

    # Ensure minutes are two digits
    if end_minute < 10:
        end_minute = f"0{end_minute}"

    # Add appropriate days later string
    days_str = ""
    if days_passed == 1:
        days_str = " (next day)"
    elif days_passed > 1:
        days_str = f" ({days_passed} days later)"

    # Create the final time string
    new_time = f"{end_hour}:{end_minute} {period}{day_str}{days_str}"
    
    return(new_time)

print(add_time('3:30 PM', '2:12', 'Monday'))
