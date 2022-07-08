const express = require('express')
const fs = require('fs')
const jwt = require('jsonwebtoken');

const app = express()
const port = 5000
app.use(express.json());
app.use(express.urlencoded());

app.post('/oauth', (req, res) => {
    console.log(req.body)

    const payload =
        {
        "given_name": "Firstname",
        "family_name": "LastName",
        "iss": "https://smartticket.ngrok.io",
        "sub": "uniqueId",
        "aud": "1xdDKDUDZs5SM1LIhVSQUnfCzfQHo7cH",
        "iat": 1623407022,
        "exp": 1723443022,
        "lp_sdes": [
        {
            "type":"ctmrinfo",
            "info":{
                "customerId":"uniqueId",
                "accountName":"FEPBD",
                "ctype":"VIP"
            }
        },
        {
            "type": "personal",
            "personal": {
                "firstname": "Firstname",
                "lastname": "LastName",
                "age": {
                    "year": 1980,
                    "month": 5,
                    "day": 1
                }
            }
        }
    ]
    }

    var privateKey = fs.readFileSync('./private_key_idp.pem');
    var token = jwt.sign(payload, privateKey, { algorithm: 'RS256'});


    // sample token
    //eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJnaXZlbl9uYW1lIjoiRmlyc3RuYW1lIiwiZmFtaWx5X25hbWUiOiJMYXN0TmFtZSIsImlzcyI6Imh0dHBzOi8vc21hcnR0aWNrZXQubmdyb2suaW8iLCJzdWIiOiJ1bmlxdWVJZCIsImF1ZCI6IjF4ZERLRFVEWnM1U00xTEloVlNRVW5mQ3pmUUhvN2NIIiwiaWF0IjoxNjIzNDA3MDIyLCJleHAiOjE3MjM0NDMwMjIsImxwX3NkZXMiOlt7InR5cGUiOiJjdG1yaW5mbyIsImluZm8iOnsiY3VzdG9tZXJJZCI6InVuaXF1ZUlkIiwiYWNjb3VudE5hbWUiOiJ7XCJIZWFsdGhjYXJlSURcIjpcImFjYzkwNmMzLWEyYzItNDI5ZS04YTFjLTIyZGJjNGIzM2I5OFwiLFwiQ2FycmllcklEXCI6XCIxNmQyNTBmNC0wZGQwLTQxNmYtYTRjMS00ZDAxMzA2OTI0YzVcIixcIkFjY291bnRcIjpcIjE2ZDI1MGY0LTBkZDAtNDE2Zi1hNGMxLTRkMDEzMDY5MjRjNlwiLFwiR3JvdXBcIjpcIjE2ZDI1MGY0LTBkZDAtNDE2Zi1hNGMxLTRkMDEzMDY5MjRjN1wiLFwiQ2xpZW50SURcIjpcIjE2ZDI1MGY0LTBkZDAtNDE2Zi1hNGMxLTRkMDEzMDY5MjRjOFwifSJ9fSx7InR5cGUiOiJwZXJzb25hbCIsInBlcnNvbmFsIjp7ImZpcnN0bmFtZSI6IkZpcnN0bmFtZSIsImxhc3RuYW1lIjoiTGFzdE5hbWUiLCJhZ2UiOnsieWVhciI6MTk4MCwibW9udGgiOjUsImRheSI6MX19fV19.H89DWGLl7lJsyOv7FqTetR5GuXNU9DXP2t2PtYY2QrQkE5zwJF9yWBeSqRk5nnfAuYp6rZl0LY3WTmK1F12S7WKloFI41ZD5Z9_pI0AxsEj8xRUYOVgWv5QC6icaGggQ15KAsbrhBR6VZAjpcWu2-y6L-a20SYBbOtzuR34ZMN02UHMWFa77KvU_QumYZJib5uQN6R2caKe8UomBLR2-xyzcQbkSyEfxoqsMFG86ExxjOaFF64U6S47cdXlMH--i4NC_FmLSyfbxUnMcdepg5xa5XzOsuIF3iC6GTD2CiuYpV11iFhM1vrk_XrTaWvdRLX_2yIM1L3IG1dsFpVljYg
    res.send(
    {
        "access_token"	: "NotApplicabale",
        "token_type"		: "Bearer",
        "id_token": token
    }
    )
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
