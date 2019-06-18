<div class="action">
	<h1>Default structure</h1>
		<div>loginForm.username = ""</div>
		<div>loginForm.password = ""</div>
		<div>user = null</div>
		<div>loginForm.remember = false</div>
		<div>selectedBook = null</div>
		<div>editBookTitle = null</div>
		<div>editSectionTitle = null</div>
		<div>selectedMind = null</div>
</div>

	<div class="action">
		<h1>postLogin</h1>
		<p>Ajax: postLogin</p>

			<p>authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJyb2xlIjoib3duZXIifQ.TzWZ-3ngMykt1fB5Yq2j25ErBaBZWIJI77zjAJkRwws'</p>
			<p>user = {'id':'1','role':'owner','person_id':'1'}</p>
			<p>books = res.books</p>
			<p>sections = res.sections</p>
			<p>minds = res.minds</p>
	</div>
	<div class="action">
		<h1>selectBook</h1>
		<p></p>

			<p>selectedBook = value</p>
			<p>selectedSection = null</p>
	</div>
	<div class="action">
		<h1>postBook</h1>
		<p>Ajax: postBook</p>

			<p>books[res] = {'id':res,'title':''}</p>
			<p>selectedBook = res</p>
			<p>editBookTitle = ''</p>
	</div>
	<div class="action">
		<h1>editBookTitle</h1>
		<p></p>

			<p>editBookTitle = value</p>
	</div>
	<div class="action">
		<h1>putBook</h1>
		<p>Ajax: putBook</p>

			<p>books[state.selectedBook].title = value.title</p>
			<p>editBookTitle = null</p>
	</div>
	<div class="action">
		<h1>exportBook</h1>
		<p></p>

			<p>exportBook = value</p>
	</div>
	<div class="action">
		<h1>postSection</h1>
		<p>Ajax: postSection</p>

			<p>sections[res] = {'id':res,'book_id':value,'title':''}</p>
			<p>selectedSection = res</p>
			<p>editSectionTitle = ''</p>
	</div>
	<div class="action">
		<h1>selectSection</h1>
		<p></p>

			<p>selectedSection = value</p>
	</div>
	<div class="action">
		<h1>openEdit</h1>
		<p></p>

			<p>editSectionTitle = state.sections[state.selectedSection].title</p>
	</div>
	<div class="action">
		<h1>putSection</h1>
		<p>Ajax: putSection</p>

			<p>sections[value.id].title = value.title</p>
			<p>editSectionTitle = null</p>
	</div>
	<div class="action">
		<h1>editSectionTitle</h1>
		<p></p>

			<p>editSectionTitle = value</p>
	</div>
	<div class="action">
		<h1>postMind</h1>
		<p>Ajax: postMind</p>

			<p>minds[res] = {'id':res,'title':'','section_id':value,'content':'','image':''}</p>
			<p>selectedMind = {'id':res,'title':'','section_id':value,'content':'','image':''}</p>
	</div>
	<div class="action">
		<h1>selectMind</h1>
		<p></p>

			<p>selectedMind = value ? Object.assign({}, value) : null</p>
	</div>
	<div class="action">
		<h1>putMind</h1>
		<p>Ajax: putMind</p>

			<p>minds[state.selectedMind.id] = Object.assign(state.selectedMind)</p>
			<p>selectedMind = null</p>
	</div>
