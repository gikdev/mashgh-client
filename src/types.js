class Homework {
  constructor({ lesson_name, description = null, status = 0, priority = "C" }) {
    this.lesson_name = lesson_name
    this.description = description
    this.status = status
    this.priority = priority
  }
}

export { Homework }
