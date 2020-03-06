package cn.ther.dao;

import cn.ther.util.Connection;
import cn.ther.util.RegexMatch;

public class GetJson {
	public static String getJson(String url,String regexStr) {
		String result=Connection.getMessage(url);
		String regex_res=RegexMatch.getRegex(result,regexStr,0);
		return regex_res;
	}
}
