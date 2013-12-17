package nju.dm.action;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import nju.dm.domain.Document;
import nju.dm.service.IDocumentService;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class DeleteDocumentAction extends ActionSupport{
	@Resource(name="documentService")
	private IDocumentService documentService;
	
	public String execute() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		Integer documentId = Integer.parseInt(request.getParameter("documentId"));
		Document document = documentService.getDocumentById(documentId);
		
		documentService.deleteDocument(document);
		return "success";
	}
}
