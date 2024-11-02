import copy
import random

# Create a hat with a specific color and amount of balls, the user decides. 
class Hat:
    def __init__(self, **balls):
        self.contents = []
        for color, count in balls.items():
            self.contents.extend([color] * count)
    
# The draw method draws and removes balls from the hat and stores them into a list.  
    def draw(self, ball_num):
        drawn_balls = []
        if ball_num >= len(self.contents):
            drawn_balls = self.contents[:]
            self.contents.clear()
            return drawn_balls
        for _ in range(ball_num):
            index = random.randint(0, len(self.contents) - 1) 
            removed_ball = self.contents.pop(index)
            drawn_balls.append(removed_ball)
        return drawn_balls

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    """
    Conducts an experiment to determine the probability of drawing a specified number of certain balls from a hat.

    Parameters:
    - hat: An object of the Hat class containing the balls.
    - expected_balls: A dictionary specifying the number of each color ball expected to be drawn.
    - num_balls_drawn: The number of balls to draw in each experiment.
    - num_experiments: The number of times the experiment will be conducted.

    Returns:
    - The probability (as a float) of drawing the expected balls given the number of balls drawn in each experiment and the number of iterations.
    """ 
    m = 0
    for _ in range(num_experiments):
        hat_copy = copy.deepcopy(hat)
        drawn_balls = hat_copy.draw(num_balls_drawn)
        success = True
        for color, count in expected_balls.items():
            if drawn_balls.count(color) < count:
                success = False
                break
        if success == True:
            m += 1     
    probability = m / num_experiments
    return float(probability)
         