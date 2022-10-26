import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import styled from "styled-components"

type InputValue = {
  name: string
  value: string | number
}

type Target = {
  target: InputValue
}

const initialState = {
  name: "",
  email: "",
  message: ""
}

const ContactForm: React.FC = () => {
  const [data, setData] = useState(initialState)

  const form = useRef<HTMLFormElement>(null)

  const clearForm = () => {
    setData(initialState)
  }

  const handleChange = ({ target }: Target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        () => {
          clearForm()
        },
        () => {
          clearForm()
        }
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <StyledInputWrapper>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </StyledInputWrapper>
      </div>
      <div>
        <StyledTextarea
          name="message"
          placeholder="Message"
          value={data.message}
          onChange={handleChange}
          required
        />
      </div>
      <StyledFormButton type="submit">Say Hello</StyledFormButton>
    </form>
  )
}

const StyledInputWrapper = styled.div`
  width: 49%;
  margin-left: 2%;
  margin-bottom: 2%;
  float: left;

  &:first-child {
    margin-left: 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin-left: 0;
    float: none;
  }
`

const StyledInput = styled.input`
  width: 100%;
  padding: 14px 20px;
  border: none;
  outline: none;
  background-color: var(--light-blue);
  color: var(--light-slate);

  &::placeholder {
    font-weight: 500;
    color: var(--dark-slate);
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 14px 20px;
  margin-bottom: 2%;
  border: none;
  outline: none;
  vertical-align: top;
  background-color: var(--light-blue);
  color: var(--light-slate);

  &::placeholder {
    font-weight: 500;
    color: var(--dark-slate);
  }
`

const StyledFormButton = styled.button`
  ${({ theme }) => theme.mixins.yellowButton}
  padding: 0.875rem 1.5rem;
  letter-spacing: 1px;
  margin-top: 1px;
  float: right;
`

export default ContactForm
