describe('Automation API Rest Swagger Petstore',()=>{
    it('Crear un usuario',()=>{
        cy.readFile('data/dataApiPet.json').then((user)=>{
            cy.request({
                url:'user/', 
                method:'POST', 
                body: {
                    "id": user.datanewuser.id,
                    "username": user.datanewuser.username,
                    "firstName": user.datanewuser.firstName,
                    "lastName": user.datanewuser.lastName,
                    "email": user.datanewuser.email,
                    "password": user.datanewuser.password,
                    "phone": user.datanewuser.phone,
                    "userStatus": user.datanewuser.userStatus
                }
            }).as('createUser')
            cy.get('@createUser').its('status').should('equal',200)
            cy.get('@createUser').then((response) => {
                expect(response.body.message).to.equal(user.datanewuser.id.toString())
                expect(response.body.type).to.equal('unknown')
            })
        })
        
    })

    it('Buscar usuario',()=>{
        cy.readFile('data/dataApiPet.json').then((user)=>{
            cy.request({
                url:'/user/user1', 
                method:'GET'
            }).as('oldUser')
            cy.get('@oldUser').its('status').should('equal',200)
            cy.get('@oldUser').then((response) => {
                expect(response.body.username).to.equal(user.dataolduser.username.toString())
                expect(response.body.firstName).to.equal(user.dataolduser.firstName.toString())
                expect(response.body.password).to.equal(user.dataolduser.pass.toString())
            })
        })
        
    })

    it('Actualizar un usuario',()=>{
        cy.readFile('data/dataApiPet.json').then((user)=>{
            cy.request({
                url:'/user/Millo', 
                method:'PUT', 
                body: {
                    "id": 0,
                    "username": "",
                    "firstName": user.dataupdateuser.firstName,
                    "lastName": "",
                    "email": user.dataupdateuser.email,
                    "password": "",
                    "phone": "",
                    "userStatus": 0
                }
            }).as('updateUser')
            cy.get('@updateUser').its('status').should('equal',200)
            cy.get('@updateUser').then((response) => {
                expect(response.body.type).to.equal("unknown")
            })
        })
        
    })

    it('Eliminar un usuario',()=>{
        cy.readFile('data/dataApiPet.json').then((user)=>{
            cy.request({
                url:'/user/Millo', 
                method:'DELETE'
            }).as('deleteUser')
            cy.get('@deleteUser').its('status').should('equal',200)
            cy.get('@deleteUser').then((response) => {
                expect(response.body.message).to.equal(user.datadeleteuser.username)
                expect(response.body.type).to.equal('unknown')
        })
        
    })
})
})