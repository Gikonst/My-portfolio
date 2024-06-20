def main():
    problem =  ["44 + 815", "909 - 2", "45 + 43", "100+3", "400 - 3"]
    print(f"{arithmetic_arranger(problem, show_answers=True)}")

def arithmetic_arranger(problems, show_answers=False):
    
    """ 
    This function takes a list of 5 mathematical operations, which should be only additions or subtractions. 
    It returns the list into vertically placed mathematical operations, like we used to do in the elementary school.
    """ 

#Input Error
    if len(problems) > 5 :
        return('Error: Too many problems.')
    
    else:   

#Variables of the string - Error handling - Looping though every string included in the problems list
        new_prob_list = []
        for problem in problems:
            if "+" in problem:
                operand_1, operand_2 = problem.split("+")
                operator = "+"
            elif "-" in problem:
                operand_1, operand_2 = problem.split("-")
                operator = "-" 
            else:
                return "Error: Operator must be '+' or '-'."   
            
            operand_1 = operand_1.strip()
            operand_2 = operand_2.strip()

            if not operand_1.isdigit() or not operand_2.isdigit():
                return 'Error: Numbers must only contain digits.'
            if len(operand_1) > 4 or len(operand_2) > 4:
                return'Error: Numbers cannot be more than four digits.'

    #Append the tuples on the list - we add tuples instead of strings because we need to be able to loop through the tuples of the list with the following order --> operand_1 - operator - operand_2
            new_prob_list.append((operand_1, operator, operand_2))
        
    #Creating the lines
        first_line = ""
        second_line = ""
        dashes= ""
        result= ""

    #Aligning the lines properly, we choose as maximum length of the line the length of the longer integer and we align them on the right side
        for operand_1, operator, operand_2 in new_prob_list: 
            line_length = max(len(operand_1), len(operand_2)) + 2
            first_line += operand_1.rjust(line_length) + "    "
            second_line += operator + " " + operand_2.rjust(line_length - 2) + "    "
            dashes += "-" * line_length + "    "
        
    #Calculating the results if the "show_answers" parameter is set to True
            if show_answers:

                if operator == "+":
                    answer = str(int(operand_1) + int(operand_2))
            
                else:
                    answer = str(int(operand_1) - int(operand_2))
            
                result += answer.rjust(line_length) + "    "

    #Cleaning the lines from any space etc on their right side    
        first_line = first_line.rstrip()
        second_line = second_line.rstrip()
        dashes = dashes.rstrip()
        result = result.rstrip()

    #Showing the results if the "show_answers" parameter is set to True
        if show_answers:
            arranged = f"{first_line}\n{second_line}\n{dashes}\n{result}"
        else:
            arranged = f"{first_line}\n{second_line}\n{dashes}"
        
    return arranged



if __name__ == "__main__":
    main()

