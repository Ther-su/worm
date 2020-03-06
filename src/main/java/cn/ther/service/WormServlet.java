package cn.ther.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.ther.dao.GetJson;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class WormServlet
 */
public class WormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WormServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=utf-8");
		String url="https://ncov.dxy.cn/ncovh5/view/pneumonia?scene=2&clicktime=1579579384&enterid=1579579384&from=groupmessage&isappinstalled=0"; 
		String url1="https://file1.dxycdn.com/2020/0130/492/3393874921745912795-115.json?t=26381282";
		PrintWriter out=response.getWriter();
		String patternCountry="(?<=getListByCountryTypeService2 = )(.*?)(?=}catch)";
		String countryList=GetJson.getJson(url, patternCountry);
		String patternProvince="(?<=getAreaStat = )(.*?)(?=}catch)";
		String provinceList=GetJson.getJson(url, patternProvince);
		String patternNews="(?<=data\":)(.*?)(?=,\"message)";
		String newsList=GetJson.getJson(url1, patternNews);
		//String patternRecommend="(?<=getIndexRecommendList = )(.*?)(?=}catch)";
		//String recommendList=GetJson.getJson(url, patternRecommend);
		//String patternRumor="(?<=getIndexRumorList = )(.*?)(?=}catch)";
		//String rumorList=GetJson.getJson(url, patternRumor);
		//String patternWiki="(?<=getWikiList = )(.*?)(?=}catch)";
		//String wikiList=GetJson.getJson(url, patternWiki);
		String patternStatistics="(?<=getStatisticsService = )(.*?)(?=}catch)";
		String statisticsList=GetJson.getJson(url, patternStatistics);
		//String patternEntries="(?<=getEntries = )(.*?)(?=}catch)";
		//String entriesList=GetJson.getJson(url, patternEntries);
		JSONObject json=new JSONObject();
		json.put("countryList", countryList);
		json.put("provinceList",provinceList);
		json.put("newsList", newsList);
		//json.put("recommendList", recommendList);
		//json.put("rumorList", rumorList);
		//json.put("wikiList", wikiList);
		json.put("statisticsList", statisticsList);
		//json.put("entriesList", entriesList);
		System.out.println(json.toString());
		out.print(json.toString());
	}

}
