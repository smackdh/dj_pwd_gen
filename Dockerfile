# Use the official Python image as the base image
FROM python:3.8

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create and set the working directory
WORKDIR /code

# Copy the requirements file and install dependencies
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project files into the container
COPY . /code/

# Expose the port on which the application will run
EXPOSE 8000

# Command to start the development server
CMD ["python", "pwdgen/manage.py", "runserver", "0.0.0.0:8000"]
