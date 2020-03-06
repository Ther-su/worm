package cn.ther.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class Connection {
	public static String getMessage(String url) {
		String result=null;
		// 定义一个缓冲字符输入流
		BufferedReader in = null;
		try
		{
			// 将string转成url对象
			URL realUrl = new URL(url);
			// 初始化一个链接到那个url的连接
			URLConnection connection = realUrl.openConnection();
			connection.setRequestProperty("Accept-Charset", "UTF-8");
			connection.setRequestProperty("Content-Type", "application/json");
			connection.setRequestProperty("referer", url);
			connection.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible;MSIE 7.0; Windows NT 5.1; Maxthon;)");
			// 开始实际的连接
			connection.connect();
			// 初始化 BufferedReader输入流来读取URL的响应
			in = new BufferedReader(new InputStreamReader(connection.getInputStream(),"utf-8"));
			// 用来临时存储抓取到的每一行的数据
			String line;
			while ((line = in.readLine()) != null)
			{
				// 遍历抓取到的每一行并将其存储到result里面
				result += line;
			}
		} catch (Exception e)
		{
			System.out.println("发送GET请求出现异常！" + e);
			e.printStackTrace();
		} // 使用finally来关闭输入流
		finally
		{
			try
			{
				if (in != null)
				{
					in.close();
				}
			} catch (Exception e2)
			{
				e2.printStackTrace();
			}
			
		}
		return result;
	}
}
