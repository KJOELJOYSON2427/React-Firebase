
export const registerFormControls=[
    {
        name:"name",
        placeholder:"Enter your name",
        componentType:"input",
        typr:"text"
    },
    {
        name:"email",
        placeholder:"Enter your email",
        componentType:"input",
        type:"email"
    },
    {
        name:"password",
        placeholder:"Enter your password",
        componentType:"input",
        type:"password"
    },
    {
        name: "role",
        placeholder: "Select your role",
        componentType: "select",
        options: [
          { value: "admin", label: "Admin" },
          { value: "user", label: "User" },
          { value: "manager", label: "Manager" },
        ],
      },
]