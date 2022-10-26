<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Email:</label>
            <input type="email" required v-model="email" /> <br/>
            <label>Password:</label>
            <input type="password" required v-model="password" /> <br/>
            <label>Role:</label>
            <select v-model="role">
                <option value="Dev">Dev</option>
                <option value="Tester">Tester</option>
            </select> <br/>
            <input type="checkbox" required v-model="terms"/>
            <label>Accept</label><br/>
            <input type="checkbox" required value="vien" v-model="names"/>
            <label>vien</label><br/>
            <input type="checkbox" required value="tuan" v-model="names"/>
            <label>tuan</label><br/>
            <input type="checkbox" required value="loan" v-model="names"/>
            <label>loan</label><br/>
            <label>Skill</label>
            <input type="text" required v-model="tempSkill" @keyup.alt="addSkill"/><br/>
            <button type="submit">Submit</button>
        </form>
        <p>Email: {{email}}</p>
        <p>Passwor: {{password}}</p>
        <p>Role: {{role}}</p>
        <p>Terms: {{terms}}</p>
        <p>Names: {{names}}</p>
        <p>Skills: {{skills}}</p>
    </div>
</template>

<script>
export default {
    name: 'signupform',
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: '',
            names: [],
            tempSkill: '',
            skills: []
        }
    },
    methods: {
        addSkill(e) {
            if(e.key === ',' && this.tempSkill){
                this.skills.push(this.tempSkill)
                this.tempSkill=''
            }
        },
        handleSubmit() {
            
        }
    }
}
</script>

<style>
input{
    margin-bottom: 10px;
}
</style>