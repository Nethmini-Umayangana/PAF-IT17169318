package model;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DoctorAPI extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	Doctor doctorObj = new Doctor();
	
	public ItemAPI()
	{
		super();
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
			{
			 String output = doctorObj.insertItem(request.getParameter("doctorName"), 
			request.getParameter("address"),
			request.getParameter("phoneNum"),
			request.getParameter("email"),
			request.getParameter("gender"),
			request.getParameter("age"),
			request.getParameter("status"),
			request.getParameter("specialization"),
			request.getParameter("hospitalWork"),
			request.getParameter("details"),
			request.getParameter("username"),
			request.getParameter("password"));
			response.getWriter().write(output);
			}
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
			{
			 Map paras = getParasMap(request);
			 String output = doctorObj.updateItem(paras.get("hidDoctorIDSave").toString(),
			 paras.get("address").toString(),
			 paras.get("phoneNum").toString(),
			 paras.get("email").toString(),
			 paras.get("gender").toString(),
			 paras.get("age").toString(),
			 paras.get("status").toString(),
			 paras.get("specialization").toString(),
			 paras.get("hospitalWork").toString(),
			 paras.get("details").toString(),
			 paras.get("username").toString(),
			 paras.get("password").toString());
			 response.getWriter().write(output);
			}
			
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
			{
			 Map paras = getParasMap(request);
			 String output = doctorObj.deleteItem(paras.get("doctorID").toString());
			response.getWriter().write(output);
			}
	
	private static Map getParasMap(HttpServletRequest request)
	{
	 Map<String, String> map = new HashMap<String, String>();
	try
	 {
	 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
	 String queryString = scanner.hasNext() ?
	 scanner.useDelimiter("\\A").next() : "";
	 scanner.close();
	 String[] params = queryString.split("&");
	 for (String param : params)
	 { 
		 String[] p = param.split("=");
		 map.put(p[0], p[1]);
		 }
		 }
		catch (Exception e)
		 {
		 }
		return map;
		}


}
