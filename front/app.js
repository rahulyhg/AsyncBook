function ajax_postLogin(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/login`, data: state.loginForm, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_postBook(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/books`, data: {'title':''}, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_putBook(state, value) {
	return $.ajax({ method: 'put', url: `${apiUrl}/books`, data: value, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_postSection(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/sections`, data: {'book_id': value, 'title':'' }, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_putSection(state, value) {
	return $.ajax({ method: 'put', url: `${apiUrl}/sections`, data: value, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_postMind(state, value) {
	return $.ajax({ method: 'post', url: `${apiUrl}/minds`, data: {'section_id':value,'title':'','content':'','image':''}, headers: {
		Authorization: state.authToken || ''
	}})
}
function ajax_putMind(state, value) {
	return $.ajax({ method: 'put', url: `${apiUrl}/minds`, data: state.selectedMind, headers: {
		Authorization: state.authToken || ''
	}})
}

const state = {
	updateHack: false,
	preloader: 0,
	l: null,
	lang: { en: {} }
}

DotObject.str('lang.en.loginForm.username', "Username", state);
DotObject.str('lang.cs.loginForm.username', "Přihlašovací jméno", state);
DotObject.str('lang.en.loginForm.password', "Password", state);
DotObject.str('lang.cs.loginForm.password', "Heslo", state);
DotObject.str('lang.en.loginForm.login', "Log in", state);
DotObject.str('lang.cs.loginForm.login', "Přihlásit se", state);
DotObject.str('lang.en.loginForm.remeber', "Remember me", state);
DotObject.str('lang.cs.loginForm.remeber', "Zapamatovat", state);
DotObject.str('lang.en.books.new', "New book", state);
DotObject.str('lang.cs.books.new', "Nová kniha", state);
DotObject.str('lang.en.books.new', "New book", state);
DotObject.str('lang.cs.books.new', "Nová kniha", state);
DotObject.str('lang.en.buttons.back', "Back", state);
DotObject.str('lang.cs.buttons.back', "Zpět", state);
DotObject.str('lang.en.buttons.back', "Back", state);
DotObject.str('lang.cs.buttons.back', "Zpět", state);
DotObject.str('lang.en.books.editTitle', "Edit title", state);
DotObject.str('lang.cs.books.editTitle', "Upravit název", state);
DotObject.str('lang.en.books.editTitle', "Edit title", state);
DotObject.str('lang.cs.books.editTitle', "Upravit název", state);
DotObject.str('lang.en.books.title', "Book title", state);
DotObject.str('lang.cs.books.title', "Název knihy", state);
DotObject.str('lang.en.buttons.save', "Save", state);
DotObject.str('lang.cs.buttons.save', "Uložit", state);
DotObject.str('lang.en.buttons.save', "Save", state);
DotObject.str('lang.cs.buttons.save', "Uložit", state);
DotObject.str('lang.en.buttons.cancel', "Cancel", state);
DotObject.str('lang.cs.buttons.cancel', "Zrušit", state);
DotObject.str('lang.en.buttons.cancel', "Cancel", state);
DotObject.str('lang.cs.buttons.cancel', "Zrušit", state);
DotObject.str('lang.en.buttons.export', "Export", state);
DotObject.str('lang.cs.buttons.export', "Exportovat", state);
DotObject.str('lang.en.buttons.export', "Export", state);
DotObject.str('lang.cs.buttons.export', "Exportovat", state);
DotObject.str('lang.en.sections.new', "New section", state);
DotObject.str('lang.cs.sections.new', "Nová kapitola", state);
DotObject.str('lang.en.sections.new', "New section", state);
DotObject.str('lang.cs.sections.new', "Nová kapitola", state);
DotObject.str('lang.en.sections.editTitle', "Edit title", state);
DotObject.str('lang.cs.sections.editTitle', "Upravit titulek", state);
DotObject.str('lang.en.sections.editTitle', "Edit title", state);
DotObject.str('lang.cs.sections.editTitle', "Upravit titulek", state);
DotObject.str('lang.en.sections.editTitle', "Edit title", state);
DotObject.str('lang.cs.sections.editTitle', "Upravit název", state);
DotObject.str('lang.en.minds.new', "New mind", state);
DotObject.str('lang.cs.minds.new', "Nová myšlenka", state);
DotObject.str('lang.en.minds.new', "New mind", state);
DotObject.str('lang.cs.minds.new', "Nová myšlenka", state);
DotObject.str('lang.en.minds.editMind', "Edit mind", state);
DotObject.str('lang.cs.minds.editMind', "Úprava myšlenky", state);
DotObject.str('lang.en.minds.title', "Title", state);
DotObject.str('lang.cs.minds.title', "Název", state);
DotObject.str('lang.en.minds.content', "Content", state);
DotObject.str('lang.cs.minds.content', "Obsah", state);
DotObject.str('lang.en.minds.image', "Image", state);
DotObject.str('lang.cs.minds.image', "Obrázek", state);
DotObject.str('lang.en.minds.save', "Save", state);
DotObject.str('lang.cs.minds.save', "Uložit", state);
DotObject.str('lang.en.minds.save', "Save", state);
DotObject.str('lang.cs.minds.save', "Uložit", state);
DotObject.str('loginForm.username', "", state);
DotObject.str('loginForm.password', "", state);
DotObject.str('user', null, state);
DotObject.str('loginForm.remember', false, state);
DotObject.str('selectedBook', null, state);
DotObject.str('editBookTitle', null, state);
DotObject.str('editSectionTitle', null, state);
DotObject.str('selectedMind', null, state);

state.l = state.lang.en

const store = new Vuex.Store({
	state,
	mutations: {
		'initFromGet': function(state, payload) {
			var queryDict = {};
			var setFromUrl = function(item) {
				[key, value] = item.split("=")
				DotObject.str(key, value, state);
			}
			document.cookie.split("; ").forEach(setFromUrl)
			location.search.substr(1).split("&").forEach(setFromUrl)
		},
		'function': function(state, payload) {
		},
		'input': function(state, payload) {
			eval(payload.path + " = \'" + payload.value + "\'");
			state.updateHack = !state.updateHack
		},
		'preloaderAdd': function(state) {
			state.preloader ++
		},
		'preloaderSub': function(state) {
			state.preloader --
		},
		'postLogin': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJyb2xlIjoib3duZXIifQ.TzWZ-3ngMykt1fB5Yq2j25ErBaBZWIJI77zjAJkRwws'
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.user = {'id':'1','role':'owner','person_id':'1'}
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.books = res.books
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.sections = res.sections
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.minds = res.minds
			state.updateHack = !state.updateHack
		},
		'selectBook': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.selectedBook = value
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.selectedSection = null
			state.updateHack = !state.updateHack
		},
		'postBook': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.books[res] = {'id':res,'title':''}
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.selectedBook = res
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.editBookTitle = ''
			state.updateHack = !state.updateHack
		},
		'editBookTitle': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.editBookTitle = value
			state.updateHack = !state.updateHack
		},
		'putBook': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.books[state.selectedBook].title = value.title
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.editBookTitle = null
			state.updateHack = !state.updateHack
		},
		'exportBook': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.exportBook = value
			state.updateHack = !state.updateHack
		},
		'postSection': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.sections[res] = {'id':res,'book_id':value,'title':''}
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.selectedSection = res
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.editSectionTitle = ''
			state.updateHack = !state.updateHack
		},
		'selectSection': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.selectedSection = value
			state.updateHack = !state.updateHack
		},
		'openEdit': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.editSectionTitle = state.sections[state.selectedSection].title
			state.updateHack = !state.updateHack
		},
		'putSection': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.sections[value.id].title = value.title
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.editSectionTitle = null
			state.updateHack = !state.updateHack
		},
		'editSectionTitle': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.editSectionTitle = value
			state.updateHack = !state.updateHack
		},
		'postMind': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.minds[res] = {'id':res,'title':'','section_id':value,'content':'','image':''}
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.selectedMind = {'id':res,'title':'','section_id':value,'content':'','image':''}
			state.updateHack = !state.updateHack
		},
		'selectMind': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.selectedMind = value ? Object.assign({}, value) : null
			state.updateHack = !state.updateHack
		},
		'putMind': function(state, { value, res }) {
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.minds[state.selectedMind.id] = Object.assign(state.selectedMind)
			if (res === 0) {
				res = Math.floor(Math.random() * 1000)
			}
			state.selectedMind = null
			state.updateHack = !state.updateHack
		},
	},
	actions: {
		'initFromGet': function({commit, dispatch, state}, value) {
			var queryDict = {};
			var data = document.cookie.split("; ").concat(location.search.substr(1).split("&"))
			data.forEach(function(item) {
				[key, value] = item.split("=")
				queryDict[key] = value
				if (key === 'authToken') {
					dispatch('postLogin')
				}
			})
			commit('initFromGet', queryDict)
		},
		'postLogin': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postLogin(state, value).done(res => {
				commit('postLogin', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'postBook': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postBook(state, value).done(res => {
				commit('postBook', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'putBook': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_putBook(state, value).done(res => {
				commit('putBook', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'postSection': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postSection(state, value).done(res => {
				commit('postSection', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'putSection': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_putSection(state, value).done(res => {
				commit('putSection', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'postMind': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_postMind(state, value).done(res => {
				commit('postMind', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},
		'putMind': function({commit, state}, value) {
			commit('preloaderAdd')
			ajax_putMind(state, value).done(res => {
				commit('putMind', { res, value })
				commit('preloaderSub')
			}).fail(err => {

			})
		},

	}
})

Vue.component(`LoginFormUsernameInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="LoginFormUsernameInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.loginForm.username', value: $event.target.value })" :value="state.loginForm.username" data-test="LoginUsername"/>`
})

Vue.component(`LoginFormUsernameInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormUsernameInputLabel" v-text="state.l.loginForm.username"/>`
})

Vue.component(`LoginFormUsernameInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormUsernameInput form-group">
		<LoginFormUsernameInputLabel :item="item" />
		<LoginFormUsernameInputControl :item="item" />

	</div>`
})

Vue.component(`LoginFormPasswordInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="LoginFormPasswordInputControl form-control" type="password" @input="$store.commit('input', { path: 'state.loginForm.password', value: $event.target.value })" :value="state.loginForm.password" data-test="LoginPassword"/>`
})

Vue.component(`LoginFormPasswordInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormPasswordInputLabel" v-text="state.l.loginForm.password"/>`
})

Vue.component(`LoginFormPasswordInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormPasswordInput form-group">
		<LoginFormPasswordInputLabel :item="item" />
		<LoginFormPasswordInputControl :item="item" />

	</div>`
})

Vue.component(`LoginFormLoginRowSendLoginButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="LoginFormLoginRowSendLoginButton btn btn-default" v-text="state.l.loginForm.login" data-test="LoginButton" @click="$store.dispatch('postLogin', null)"/>`
})

Vue.component(`LoginFormLoginRowSend`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormLoginRowSend col-xs-6">
		<LoginFormLoginRowSendLoginButton />

	</div>`
})

Vue.component(`LoginFormLoginRowRememberRememberInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="LoginFormLoginRowRememberRememberInputControl form-control" type="checkbox" @input="$store.commit('input', { path: 'state.loginForm.remeber', value: $event.target.checked ? 1 : 0 })" :value="state.loginForm.remeber"/>`
})

Vue.component(`LoginFormLoginRowRememberRememberInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormLoginRowRememberRememberInputLabel" v-text="state.l.loginForm.remeber"/>`
})

Vue.component(`LoginFormLoginRowRememberRememberInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormLoginRowRememberRememberInput form-group">
		<LoginFormLoginRowRememberRememberInputLabel :item="item" />
		<LoginFormLoginRowRememberRememberInputControl :item="item" />

	</div>`
})

Vue.component(`LoginFormLoginRowRemember`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormLoginRowRemember col-xs-6">
		<LoginFormLoginRowRememberRememberInput />

	</div>`
})

Vue.component(`LoginFormLoginRow`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginFormLoginRow row">
		<LoginFormLoginRowSend />
		<LoginFormLoginRowRemember />

	</div>`
})

Vue.component(`LoginForm`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="LoginForm">
		<LoginFormUsernameInput />
		<LoginFormPasswordInput />
		<LoginFormLoginRow />

	</div>`
})

Vue.component(`Login`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="Login container" v-if="!(state.user)">
		<LoginForm />

	</div>`
})

Vue.component(`AdminBooksBookListContainerBookListItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksBookListContainerBookListItem list-group-item" v-text="item.title" @click="$store.commit('selectBook', { value: item.id, res: null })"/>`
})

Vue.component(`AdminBooksBookListContainerBookList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksBookListContainerBookList list-group"><div v-for="(item, id) of state.books" :key="item.id" >
		<AdminBooksBookListContainerBookListItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminBooksBookListContainerNewButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksBookListContainerNewButton btn btn-default" v-text="state.l.books.new" @click="$store.dispatch('postBook', null)"/>`
})

Vue.component(`AdminBooksBookListContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksBookListContainer" v-if="!(state.selectedBook)">
		<AdminBooksBookListContainerBookList />
		<AdminBooksBookListContainerNewButton />

	</div>`
})

Vue.component(`AdminBooksEditBackButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditBackButton btn btn-default" v-text="state.l.buttons.back" @click="$store.commit('selectBook', { value: null, res: null })"/>`
})

Vue.component(`AdminBooksEditTitle`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h1 class="AdminBooksEditTitle" v-text="state.books[state.selectedBook].title"/>`
})

Vue.component(`AdminBooksEditTitleEditClosedEditButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditTitleEditClosedEditButton btn btn-default" v-text="state.l.books.editTitle" @click="$store.commit('editBookTitle', { value: state.books[state.selectedBook].title, res: null })"/>`
})

Vue.component(`AdminBooksEditTitleEditClosed`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditTitleEditClosed" v-if="(state.editBookTitle === null)">
		<AdminBooksEditTitleEditClosedEditButton />

	</div>`
})

Vue.component(`AdminBooksEditTitleEditOpenTitleInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminBooksEditTitleEditOpenTitleInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.editBookTitle', value: $event.target.value })" :value="state.editBookTitle"/>`
})

Vue.component(`AdminBooksEditTitleEditOpenTitleInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditTitleEditOpenTitleInputLabel" v-text="state.l.books.title"/>`
})

Vue.component(`AdminBooksEditTitleEditOpenTitleInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditTitleEditOpenTitleInput form-group">
		<AdminBooksEditTitleEditOpenTitleInputLabel :item="item" />
		<AdminBooksEditTitleEditOpenTitleInputControl :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditTitleEditOpenSaveButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditTitleEditOpenSaveButton btn btn-default btn btn-success" v-text="state.l.buttons.save" @click="$store.dispatch('putBook', {'id': state.selectedBook, 'title': state.editBookTitle})"/>`
})

Vue.component(`AdminBooksEditTitleEditOpenCancelButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditTitleEditOpenCancelButton btn btn-default" v-text="state.l.buttons.cancel" @click="$store.commit('editBookTitle', { value: null, res: null })"/>`
})

Vue.component(`AdminBooksEditTitleEditOpen`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditTitleEditOpen" v-if="(state.editBookTitle !== null)">
		<AdminBooksEditTitleEditOpenTitleInput />
		<AdminBooksEditTitleEditOpenSaveButton />
		<AdminBooksEditTitleEditOpenCancelButton />

	</div>`
})

Vue.component(`AdminBooksEditTitleEdit`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditTitleEdit">
		<AdminBooksEditTitleEditClosed />
		<AdminBooksEditTitleEditOpen />

	</div>`
})

Vue.component(`AdminBooksEditLine`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<hr class="AdminBooksEditLine"/>`
})

Vue.component(`AdminBooksEditExportButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditExportButton btn btn-default btn btn-success" v-text="state.l.buttons.export" @click="$store.commit('exportBook', { value: state.selectedBook, res: null })"/>`
})

Vue.component(`AdminBooksEditLineExport`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<hr class="AdminBooksEditLineExport"/>`
})

Vue.component(`AdminBooksEditExportedContentBackButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditExportedContentBackButton btn btn-default" v-text="state.l.buttons.back" @click="$store.commit('exportBook', { value: null, res: null })"/>`
})

Vue.component(`AdminBooksEditExportedContentSectionContainerItemTitle`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h2 class="AdminBooksEditExportedContentSectionContainerItemTitle" v-text="item.title"/>`
})

Vue.component(`AdminBooksEditExportedContentSectionContainerItemMindsItemTitle`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h3 class="AdminBooksEditExportedContentSectionContainerItemMindsItemTitle" v-text="item.title"/>`
})

Vue.component(`AdminBooksEditExportedContentSectionContainerItemMindsItemContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditExportedContentSectionContainerItemMindsItemContent" v-text="item.content"/>`
})

Vue.component(`AdminBooksEditExportedContentSectionContainerItemMindsItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditExportedContentSectionContainerItemMindsItem">
		<AdminBooksEditExportedContentSectionContainerItemMindsItemTitle :item="item" />
		<AdminBooksEditExportedContentSectionContainerItemMindsItemContent :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditExportedContentSectionContainerItemMinds`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditExportedContentSectionContainerItemMinds"><div v-for="(item, id) of state.minds" :key="item.id" v-if="(item.section_id == static.id)">
		<AdminBooksEditExportedContentSectionContainerItemMindsItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminBooksEditExportedContentSectionContainerItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditExportedContentSectionContainerItem">
		<AdminBooksEditExportedContentSectionContainerItemTitle :item="item" :static="item" />
		<AdminBooksEditExportedContentSectionContainerItemMinds :item="item" :static="item" />

	</div>`
})

Vue.component(`AdminBooksEditExportedContentSectionContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditExportedContentSectionContainer"><div v-for="(item, id) of state.sections" :key="item.id" v-if="(item.book_id == state.selectedBook)">
		<AdminBooksEditExportedContentSectionContainerItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminBooksEditExportedContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditExportedContent" v-if="(state.exportBook)">
		<AdminBooksEditExportedContentBackButton />
		<AdminBooksEditExportedContentSectionContainer />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionListContainerNewButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditStandardContentSectionListContainerNewButton btn btn-default" v-text="state.l.sections.new" @click="$store.dispatch('postSection', state.selectedBook)"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionListContainerSectionListItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionListContainerSectionListItem list-group-item" v-text="item.title" @click="$store.commit('selectSection', { value: item.id, res: null })"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionListContainerSectionList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionListContainerSectionList list-group"><div v-for="(item, id) of state.sections" :key="item.id" v-if="(item.book_id == state.selectedBook)">
		<AdminBooksEditStandardContentSectionListContainerSectionListItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionListContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionListContainer" v-if="!(state.selectedSection)">
		<AdminBooksEditStandardContentSectionListContainerNewButton />
		<AdminBooksEditStandardContentSectionListContainerSectionList />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailBackButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditStandardContentSectionDetailBackButton btn btn-default" v-text="state.l.buttons.back" @click="$store.commit('selectSection', { value: null, res: null })"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitle`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h2 class="AdminBooksEditStandardContentSectionDetailTitle" v-text="state.sections[state.selectedSection].title"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEditClosedEditButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditStandardContentSectionDetailTitleEditClosedEditButton btn btn-default" v-text="state.l.sections.editTitle" @click="$store.commit('openEdit', { value: null, res: null })"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEditClosed`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailTitleEditClosed" v-if="(state.editSectionTitle === null)">
		<AdminBooksEditStandardContentSectionDetailTitleEditClosedEditButton />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.editSectionTitle', value: $event.target.value })" :value="state.editSectionTitle"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputLabel" v-text="state.l.sections.editTitle"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInput form-group">
		<AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputLabel :item="item" />
		<AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputControl :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEditOpenSaveButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditStandardContentSectionDetailTitleEditOpenSaveButton btn btn-default btn btn-success" v-text="state.l.buttons.save" @click="$store.dispatch('putSection', {'id': state.selectedSection, 'title': state.editSectionTitle })"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEditOpenCancelButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditStandardContentSectionDetailTitleEditOpenCancelButton btn btn-default" v-text="state.l.buttons.cancel" @click="$store.commit('editSectionTitle', { value: null, res: null })"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEditOpen`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailTitleEditOpen" v-if="(state.editSectionTitle !== null)">
		<AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInput />
		<AdminBooksEditStandardContentSectionDetailTitleEditOpenSaveButton />
		<AdminBooksEditStandardContentSectionDetailTitleEditOpenCancelButton />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailTitleEdit`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailTitleEdit">
		<AdminBooksEditStandardContentSectionDetailTitleEditClosed />
		<AdminBooksEditStandardContentSectionDetailTitleEditOpen />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailLine`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<hr class="AdminBooksEditStandardContentSectionDetailLine"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerNewButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditStandardContentSectionDetailMindListContainerNewButton btn btn-default" v-text="state.l.minds.new" @click="$store.dispatch('postMind', state.selectedSection)"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellTitle`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h3 class="AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellTitle" v-text="item.title"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellContent" v-text="item.content"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellImage`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<img class="AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellImage col-xs-12" v-if="(item.image)" :src="item.image"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCell`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCell col-xs-12" @click="$store.commit('selectMind', { value: item, res: null })">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellTitle :item="item" />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellContent :item="item" />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellImage :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRow`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRow row">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCell :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindListItem`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindListItem list-group-item col-xs-12 col-sm-6">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRow :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindList`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindList list-group"><div v-for="(item, id) of state.minds" :key="item.id" v-if="(item.section_id === state.selectedSection)">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindListItem :index="id" :item="item" />
</div>
	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeaderTitle`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<h2 class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeaderTitle" v-text="state.l.minds.editMind"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeader`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeader modal-header">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeaderTitle />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.selectedMind.title', value: $event.target.value })" :value="state.selectedMind.title"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputLabel" v-text="state.l.minds.title"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInput form-group">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputLabel :item="item" />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputControl :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<textarea class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputControl form-control" @input="$store.commit('input', { path: 'state.selectedMind.content', value: $event.target.value })" :value="state.selectedMind.content"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputLabel" v-text="state.l.minds.content"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInput form-group">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputLabel :item="item" />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputControl :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputControl`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<input class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputControl form-control" type="text" @input="$store.commit('input', { path: 'state.selectedMind.image', value: $event.target.value })" :value="state.selectedMind.image"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputLabel`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputLabel" v-text="state.l.minds.image"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInput`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInput form-group">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputLabel :item="item" />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputControl :item="item" />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBody`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBody modal-body">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInput />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInput />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInput />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterCancelButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterCancelButton btn btn-default" v-text="state.l.buttons.cancel" @click="$store.commit('selectMind', { value: null, res: null })"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterSaveButton`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<button class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterSaveButton btn btn-default btn btn-success" v-text="state.l.minds.save" @click="$store.dispatch('putMind', null)"/>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooter`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooter modal-footer">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterCancelButton />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterSaveButton />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContent modal-content">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeader />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBody />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooter />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialog`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialog modal-dialog" role="document" tabindex="-1">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContent />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModal`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModal modal show" role="dialog">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialog />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContent" v-if="(state.selectedMind)">
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModal />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetailMindListContainer`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetailMindListContainer">
		<AdminBooksEditStandardContentSectionDetailMindListContainerNewButton />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindList />
		<AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContent />

	</div>`
})

Vue.component(`AdminBooksEditStandardContentSectionDetail`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContentSectionDetail" v-if="(state.selectedSection) && (!state.exportBook)">
		<AdminBooksEditStandardContentSectionDetailBackButton />
		<AdminBooksEditStandardContentSectionDetailTitle />
		<AdminBooksEditStandardContentSectionDetailTitleEdit />
		<AdminBooksEditStandardContentSectionDetailLine />
		<AdminBooksEditStandardContentSectionDetailMindListContainer />

	</div>`
})

Vue.component(`AdminBooksEditStandardContent`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEditStandardContent" v-if="!(state.exportBook)">
		<AdminBooksEditStandardContentSectionListContainer />
		<AdminBooksEditStandardContentSectionDetail />

	</div>`
})

Vue.component(`AdminBooksEdit`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooksEdit" v-if="(state.selectedBook)">
		<AdminBooksEditBackButton />
		<AdminBooksEditTitle />
		<AdminBooksEditTitleEdit />
		<AdminBooksEditLine />
		<AdminBooksEditExportButton />
		<AdminBooksEditLineExport />
		<AdminBooksEditExportedContent />
		<AdminBooksEditStandardContent />

	</div>`
})

Vue.component(`AdminBooks`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="AdminBooks">
		<AdminBooksBookListContainer />
		<AdminBooksEdit />

	</div>`
})

Vue.component(`Admin`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="Admin container" v-if="(state.user)">
		<AdminBooks />

	</div>`
})

Vue.component(`app`, {
	props: [ "item", "static", "index" ],
	methods: {
		moment: function(value) { 
			return window.moment(value) 
		}
	},
	computed: {
		state: function() {
			return this.$store.state.updateHack ? this.$store.state : this.$store.state
		}
	},
	template: `<div class="app">
		<Login />
		<Admin />

	</div>`
})


const VueApp = new Vue({ el: "#app", store,
	mounted: function() {
		this.$store.dispatch('initFromGet')
	}
});