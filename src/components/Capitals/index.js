import {useState} from 'react'
import {CapitalContainer,CardContainer,Heading,Container,SelectElement,OptionElement,Country,Para} from './styled'

const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
  

  const Capitals =()=>{
    const [CapitalId,setCapitalId] = useState(countryAndCapitalsList[0].id)

  const onChangeCapital=(event)=>{
      setCapitalId(event.target.value)
    }

    const getFilteredResults = (id)=>{
        const filteredResults = countryAndCapitalsList.find(eachItem=>(
            eachItem.id===id
        ))

        return filteredResults.country
        
    }

    
    const country= getFilteredResults(CapitalId)

    return(
        <CapitalContainer>
            <CardContainer>
                <Heading>Countries and Capitals</Heading>
                <Container>
                <SelectElement
                 value={CapitalId}
                 onChange={onChangeCapital}
                >
                    {countryAndCapitalsList.map(eachItem=>(
                        <OptionElement value={eachItem.id} key={eachItem.id}>{eachItem.capitalDisplayText}</OptionElement>
                    ))}
                </SelectElement>
                <Para>is capital of which country?</Para>
                </Container>
                <Country>{country}</Country>
            </CardContainer>
        </CapitalContainer>
    )
  }

  export default Capitals
  