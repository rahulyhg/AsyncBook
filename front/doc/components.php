<div class="component">
	<h1>LoginFormUsernameInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".loginForm.username"</td></tr>
		<tr><td>test</td><td>"LoginUsername"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormUsernameInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.loginForm.username"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormUsernameInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>LoginFormUsernameInputLabel</li>
		<li>LoginFormUsernameInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>LoginFormPasswordInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"password"</td></tr>
		<tr><td>ref</td><td>".loginForm.password"</td></tr>
		<tr><td>test</td><td>"LoginPassword"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormPasswordInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.loginForm.password"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormPasswordInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>LoginFormPasswordInputLabel</li>
		<li>LoginFormPasswordInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRowSendLoginButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.loginForm.login"]</td></tr>
		<tr><td>test</td><td>"LoginButton"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRowSend (div/div)</h1>

	<table>
		<tr><td>class</td><td>"col-xs-6"</td></tr>
	</table>

	<ul>
		<li>LoginFormLoginRowSendLoginButton</li>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRowRememberRememberInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"checkbox"</td></tr>
		<tr><td>ref</td><td>".loginForm.remeber"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRowRememberRememberInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.loginForm.remeber"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRowRememberRememberInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>LoginFormLoginRowRememberRememberInputLabel</li>
		<li>LoginFormLoginRowRememberRememberInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRowRemember (div/div)</h1>

	<table>
		<tr><td>class</td><td>"col-xs-6"</td></tr>
	</table>

	<ul>
		<li>LoginFormLoginRowRememberRememberInput</li>
	</ul>

</div>
<div class="component">
	<h1>LoginFormLoginRow (div/div)</h1>

	<table>
		<tr><td>class</td><td>"row"</td></tr>
	</table>

	<ul>
		<li>LoginFormLoginRowSend</li>
		<li>LoginFormLoginRowRemember</li>
	</ul>

</div>
<div class="component">
	<h1>LoginForm (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>LoginFormUsernameInput</li>
		<li>LoginFormPasswordInput</li>
		<li>LoginFormLoginRow</li>
	</ul>

</div>
<div class="component">
	<h1>Login (div/div)</h1>

	<table>
		<tr><td>class</td><td>"container"</td></tr>
		<tr><td>ifnot</td><td>[".user"]</td></tr>
	</table>

	<ul>
		<li>LoginForm</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksBookListContainerBookListItem (div/div)</h1>

	<table>
		<tr><td>class</td><td>"list-group-item"</td></tr>
		<tr><td>content</td><td>["item.title"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksBookListContainerBookList (div/div)</h1>

	<table>
		<tr><td>list</td><td>".books"</td></tr>
		<tr><td>class</td><td>"list-group"</td></tr>
	</table>

	<ul>
		<li>AdminBooksBookListContainerBookListItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksBookListContainerNewButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.books.new"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksBookListContainer (div/div)</h1>

	<table>
		<tr><td>ifnot</td><td>[".selectedBook"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksBookListContainerBookList</li>
		<li>AdminBooksBookListContainerNewButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditBackButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.buttons.back"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitle (h1/div)</h1>

	<table>
		<tr><td>header</td><td>"1"</td></tr>
		<tr><td>content</td><td>[".books[.selectedBook].title"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEditClosedEditButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.books.editTitle"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEditClosed (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".editBookTitle === null"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditTitleEditClosedEditButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEditOpenTitleInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".editBookTitle"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEditOpenTitleInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.books.title"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEditOpenTitleInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditTitleEditOpenTitleInputLabel</li>
		<li>AdminBooksEditTitleEditOpenTitleInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEditOpenSaveButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.buttons.save"]</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEditOpenCancelButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.buttons.cancel"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEditOpen (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".editBookTitle !== null"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditTitleEditOpenTitleInput</li>
		<li>AdminBooksEditTitleEditOpenSaveButton</li>
		<li>AdminBooksEditTitleEditOpenCancelButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditTitleEdit (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminBooksEditTitleEditClosed</li>
		<li>AdminBooksEditTitleEditOpen</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditLine (hr/div)</h1>

	<table>
		<tr><td>tag</td><td>"hr"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.buttons.export"]</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditLineExport (hr/div)</h1>

	<table>
		<tr><td>tag</td><td>"hr"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContentBackButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.buttons.back"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContentSectionContainerItemTitle (h2/div)</h1>

	<table>
		<tr><td>content</td><td>["item.title"]</td></tr>
		<tr><td>header</td><td>"2"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContentSectionContainerItemMindsItemTitle (h3/div)</h1>

	<table>
		<tr><td>content</td><td>["item.title"]</td></tr>
		<tr><td>header</td><td>"3"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContentSectionContainerItemMindsItemContent (div/div)</h1>

	<table>
		<tr><td>content</td><td>["item.content"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContentSectionContainerItemMindsItem (div/div)</h1>

	<table>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditExportedContentSectionContainerItemMindsItemTitle</li>
		<li>AdminBooksEditExportedContentSectionContainerItemMindsItemContent</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContentSectionContainerItemMinds (div/div)</h1>

	<table>
		<tr><td>list</td><td>".minds"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditExportedContentSectionContainerItemMindsItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContentSectionContainerItem (div/div)</h1>

	<table>
		<tr><td>static</td><td>"item"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditExportedContentSectionContainerItemTitle</li>
		<li>AdminBooksEditExportedContentSectionContainerItemMinds</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContentSectionContainer (div/div)</h1>

	<table>
		<tr><td>list</td><td>".sections"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditExportedContentSectionContainerItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditExportedContent (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".exportBook"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditExportedContentBackButton</li>
		<li>AdminBooksEditExportedContentSectionContainer</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionListContainerNewButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.sections.new"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionListContainerSectionListItem (div/div)</h1>

	<table>
		<tr><td>class</td><td>"list-group-item"</td></tr>
		<tr><td>content</td><td>["item.title"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionListContainerSectionList (div/div)</h1>

	<table>
		<tr><td>list</td><td>".sections"</td></tr>
		<tr><td>class</td><td>"list-group"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionListContainerSectionListItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionListContainer (div/div)</h1>

	<table>
		<tr><td>ifnot</td><td>[".selectedSection"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionListContainerNewButton</li>
		<li>AdminBooksEditStandardContentSectionListContainerSectionList</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailBackButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.buttons.back"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitle (h2/div)</h1>

	<table>
		<tr><td>header</td><td>"2"</td></tr>
		<tr><td>content</td><td>[".sections[.selectedSection].title"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEditClosedEditButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.sections.editTitle"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEditClosed (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".editSectionTitle === null"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailTitleEditClosedEditButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".editSectionTitle"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.sections.editTitle"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputLabel</li>
		<li>AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEditOpenSaveButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
		<tr><td>content</td><td>[".l.buttons.save"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEditOpenCancelButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.buttons.cancel"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEditOpen (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".editSectionTitle !== null"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailTitleEditOpenTitleInput</li>
		<li>AdminBooksEditStandardContentSectionDetailTitleEditOpenSaveButton</li>
		<li>AdminBooksEditStandardContentSectionDetailTitleEditOpenCancelButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailTitleEdit (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailTitleEditClosed</li>
		<li>AdminBooksEditStandardContentSectionDetailTitleEditOpen</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailLine (hr/div)</h1>

	<table>
		<tr><td>tag</td><td>"hr"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerNewButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.minds.new"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellTitle (h3/div)</h1>

	<table>
		<tr><td>header</td><td>"3"</td></tr>
		<tr><td>content</td><td>["item.title"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellContent (div/div)</h1>

	<table>
		<tr><td>content</td><td>["item.content"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellImage (img/div)</h1>

	<table>
		<tr><td>if</td><td>["item.image"]</td></tr>
		<tr><td>tag</td><td>"img"</td></tr>
		<tr><td>:src</td><td>"item.image"</td></tr>
		<tr><td>class</td><td>"col-xs-12"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCell (div/div)</h1>

	<table>
		<tr><td>nest</td><td>"item"</td></tr>
		<tr><td>class</td><td>"col-xs-12"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellTitle</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellContent</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCellImage</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRow (div/div)</h1>

	<table>
		<tr><td>nest</td><td>"item"</td></tr>
		<tr><td>class</td><td>"row"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRowMindCell</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItem (div/div)</h1>

	<table>
		<tr><td>class</td><td>"list-group-item"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
		<tr><td>class</td><td>"col-xs-12 col-sm-6"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItemMindRow</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindList (div/div)</h1>

	<table>
		<tr><td>list</td><td>".minds"</td></tr>
		<tr><td>class</td><td>"list-group"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindListItem</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeaderTitle (h2/div)</h1>

	<table>
		<tr><td>content</td><td>[".l.minds.editMind"]</td></tr>
		<tr><td>header</td><td>"2"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeader (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-header"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeaderTitle</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".selectedMind.title"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.minds.title"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputLabel</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputControl (textarea/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"textarea"</td></tr>
		<tr><td>ref</td><td>".selectedMind.content"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.minds.content"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputLabel</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputControl (input/div)</h1>

	<table>
		<tr><td>class</td><td>"form-control"</td></tr>
		<tr><td>input</td><td>"text"</td></tr>
		<tr><td>ref</td><td>".selectedMind.image"</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputLabel (div/div)</h1>

	<table>
		<tr><td></td><td>[".l.minds.image"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInput (div/div)</h1>

	<table>
		<tr><td>class</td><td>"form-group"</td></tr>
		<tr><td>nest</td><td>"item"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputLabel</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInputControl</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBody (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-body"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyTitleInput</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyContentInput</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBodyImageInput</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterCancelButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>content</td><td>[".l.buttons.cancel"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterSaveButton (button/div)</h1>

	<table>
		<tr><td>button</td><td>"default"</td></tr>
		<tr><td>button</td><td>"success"</td></tr>
		<tr><td>content</td><td>[".l.minds.save"]</td></tr>
	</table>

	<ul>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooter (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-footer"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterCancelButton</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooterSaveButton</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContent (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-content"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentHeader</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentBody</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContentFooter</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialog (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal-dialog"</td></tr>
		<tr><td>role</td><td>"document"</td></tr>
		<tr><td>tabindex</td><td>"-1"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialogContent</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModal (div/div)</h1>

	<table>
		<tr><td>class</td><td>"modal show"</td></tr>
		<tr><td>role</td><td>"dialog"</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModalDialog</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContent (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".selectedMind"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContentMindModal</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetailMindListContainer (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerNewButton</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindList</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainerMindEditContent</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContentSectionDetail (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".selectedSection","!.exportBook"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionDetailBackButton</li>
		<li>AdminBooksEditStandardContentSectionDetailTitle</li>
		<li>AdminBooksEditStandardContentSectionDetailTitleEdit</li>
		<li>AdminBooksEditStandardContentSectionDetailLine</li>
		<li>AdminBooksEditStandardContentSectionDetailMindListContainer</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEditStandardContent (div/div)</h1>

	<table>
		<tr><td>ifnot</td><td>[".exportBook"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditStandardContentSectionListContainer</li>
		<li>AdminBooksEditStandardContentSectionDetail</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooksEdit (div/div)</h1>

	<table>
		<tr><td>if</td><td>[".selectedBook"]</td></tr>
	</table>

	<ul>
		<li>AdminBooksEditBackButton</li>
		<li>AdminBooksEditTitle</li>
		<li>AdminBooksEditTitleEdit</li>
		<li>AdminBooksEditLine</li>
		<li>AdminBooksEditExportButton</li>
		<li>AdminBooksEditLineExport</li>
		<li>AdminBooksEditExportedContent</li>
		<li>AdminBooksEditStandardContent</li>
	</ul>

</div>
<div class="component">
	<h1>AdminBooks (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>AdminBooksBookListContainer</li>
		<li>AdminBooksEdit</li>
	</ul>

</div>
<div class="component">
	<h1>Admin (div/div)</h1>

	<table>
		<tr><td>class</td><td>"container"</td></tr>
		<tr><td>if</td><td>[".user"]</td></tr>
	</table>

	<ul>
		<li>AdminBooks</li>
	</ul>

</div>
<div class="component">
	<h1>app (div/div)</h1>

	<table>
	</table>

	<ul>
		<li>Login</li>
		<li>Admin</li>
	</ul>

</div>
